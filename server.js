const express = require('express');
const app = express();

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

const { MongoClient } = require('mongodb');
const url =
  'mongodb+srv://YSB:cjsehdthsus2580@cluster0.bxqajol.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    const postCollection = client.db('project3').collection('post');
    const counterCollection = client.db('project3').collection('counter');
    console.log('서버에 연결됐다');

    //GET
    app.get('/', async (req, res) => {
      // const query = {};
      const cursor = postCollection.find({});
      const result = (await cursor.toArray()).sort().reverse();

      const result2 = (await cursor.toArray()).sort();
      res.render('index.ejs', { post: result, post2: result2 });
    });

    app.get('/old', async (req, res) => {
      // const query = {};
      const cursor = postCollection.find({});
      const result = (await cursor.toArray()).sort();

      res.render('index.ejs', { post: result });
    });

    app.get('/write', (req, res) => {
      res.render('write.ejs');
    });

    app.get('/detail/:id', async function (req, res) {
      const result = await postCollection.findOne({
        _id: parseInt(req.params.id),
      });
      let temp = result.내용;
      temp = temp.replaceAll('\r\n', '<br>');
      console.log(result);
      res.render('detail.ejs', { data: result, temp: temp });
    });

    app.get('/edit/:id', async function (req, res) {
      const result = await postCollection.findOne({
        _id: parseInt(req.params.id),
      });
      res.render('edit.ejs', { post: result });
    });

    //POST
    app.post('/add', async function (req, res) {
      const { title, categori, today, contents, bookmark } = req.body;
      const { totalcounter } = await counterCollection.findOne({
        name: 'count',
      });
      await postCollection.insertOne({
        _id: totalcounter + 1,
        제목: title,
        구분: categori,
        날짜: today,
        내용: contents,
        책갈피: bookmark,
      });
      await counterCollection.updateOne(
        { name: 'count' },
        { $inc: { totalcounter: 1 } }
      );
      res.redirect('/');
    });

    // DELETE
    app.delete('/delete', async function (req, res) {
      req.body._id = parseInt(req.body._id);
      await postCollection.deleteOne(req.body);
      res.status(200).send({ message: '성공' });
    });

    //PUT
    app.put('/edit', async (req, res) => {
      const { id, title, categori, today, contents, bookmark } = req.body;
      await postCollection.updateOne(
        { _id: parseInt(id) },
        {
          $set: {
            제목: title,
            구분: categori,
            날짜: today,
            내용: contents,
            책갈피: bookmark,
          },
        }
      );
      console.log('수정완료');
      res.redirect('/');
    });
  } finally {
    console.log('마무리');
  }
}

main().catch(console.dir);

app.listen(3000, () => {
  console.log('3000에서 돌고있음');
});
