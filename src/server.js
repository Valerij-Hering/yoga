const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:3000/mongodb+srv://zell9113:Gering710591!@cluster0.jdafrfj.mongodb.net/Views?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Определение схемы для блогов
const blogSchema = new mongoose.Schema({
  id: Number,
  name: String,
  text: String,
  imgBlog: String,
  views: { type: Number, default: 0 }, // Добавляем поле для просмотров
});

const BlogModel = mongoose.model('Blog', blogSchema);

// Используем body-parser для обработки JSON-запросов
app.use(bodyParser.json());

// Обработка запроса на увеличение просмотров
app.post('/api/incrementViews/:id', async (req, res) => {
  const blogId = req.params.id;

  try {
    const updatedBlog = await BlogModel.findOneAndUpdate(
      { id: blogId },
      { $inc: { views: 1 } }, // Увеличиваем количество просмотров на 1
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ error: 'Блог не найден' });
    }

    res.json({ views: updatedBlog.views });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Произошла ошибка на сервере' });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
