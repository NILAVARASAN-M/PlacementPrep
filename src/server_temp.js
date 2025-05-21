// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ProjectTemp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

// Define Schemas based on your database structure
const BlogSchema = new mongoose.Schema({
  title: String,
  content: String,
  level: String,
  author: String,
  date: { type: Date, default: Date.now },
  tags: [String]
});

const CompanySchema = new mongoose.Schema({
  name: String,
  description: String,
  industry: String,
  website: String
});

const JobPostingSchema = new mongoose.Schema({
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  title: String,
  description: String,
  requirements: [String],
  salary: Number,
  location: String,
  datePosted: { type: Date, default: Date.now },
  applicationDeadline: Date
});

const JobApplicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'JobPosting' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['Applied', 'In Review', 'Rejected', 'Offered'], default: 'Applied' },
  applicationDate: { type: Date, default: Date.now },
  resume: String
});

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  profileName: String,
  skills: [String],
  education: [{
    degree: String,
    institution: String,
    year: Number
  }],
  experience: [{
    company: String,
    position: String,
    duration: String
  }]
});

const ProblemSchema = new mongoose.Schema({
  title: String,
  description: String,
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
  category: String,
  solution: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' }
});

// Create models
const Blog = mongoose.model('Blog', BlogSchema, 'Blogs');
const Company = mongoose.model('Company', CompanySchema);
const JobPosting = mongoose.model('JobPosting', JobPostingSchema, 'jobPostings');
const JobApplication = mongoose.model('JobApplication', JobApplicationSchema, 'jobApplications');
const User = mongoose.model('User', UserSchema, 'userData');
const Problem = mongoose.model('Problem', ProblemSchema);

// Route handlers
// Blog routes
const blogRoutes = express.Router();

blogRoutes.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

blogRoutes.get('/:level2_blog_name', async (req, res) => {
  try {
    const blogs = await Blog.find({ level: req.params.level2_blog_name });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

blogRoutes.get('/:level2_blog_name/:blog_content', async (req, res) => {
  try {
    const blog = await Blog.findOne({ 
      level: req.params.level2_blog_name,
      title: req.params.blog_content.replace(/-/g, ' ')
    });
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Company routes
const companyRoutes = express.Router();

companyRoutes.get('/', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

companyRoutes.get('/:company_name', async (req, res) => {
  try {
    const company = await Company.findOne({ 
      name: req.params.company_name.replace(/-/g, ' ')
    });
    
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    
    res.json(company);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

companyRoutes.get('/:company_name/:job_id', async (req, res) => {
  try {
    const company = await Company.findOne({
      name: req.params.company_name.replace(/-/g, ' ')
    });
    
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    
    const job = await JobPosting.findOne({
      _id: req.params.job_id,
      company: company._id
    });
    
    if (!job) {
      return res.status(404).json({ message: 'Job posting not found' });
    }
    
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Placement routes
const placementRoutes = express.Router();

placementRoutes.get('/jobApplications', async (req, res) => {
  try {
    const applications = await JobApplication.find()
      .populate('job')
      .populate('user');
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

placementRoutes.get('/jobData', async (req, res) => {
  try {
    const jobs = await JobPosting.find().populate('company');
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

placementRoutes.get('/jobStats', async (req, res) => {
  try {
    // Aggregating job statistics
    const stats = await JobApplication.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

placementRoutes.get('/monthlyApplicationData', async (req, res) => {
  try {
    // Aggregating monthly application data
    const monthlyData = await JobApplication.aggregate([
      {
        $group: {
          _id: {
            month: { $month: '$applicationDate' },
            year: { $year: '$applicationDate' }
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1 } }
    ]);
    res.json(monthlyData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

placementRoutes.get('/skillsToEnhance', async (req, res) => {
  try {
    // This could be a more complex query that compares user skills with job requirements
    const inDemandSkills = await JobPosting.aggregate([
      { $unwind: '$requirements' },
      {
        $group: {
          _id: '$requirements',
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 }
    ]);
    
    res.json(inDemandSkills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

placementRoutes.get('/userData', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Problem routes
const problemRoutes = express.Router();

problemRoutes.get('/GoogleProblems', async (req, res) => {
  try {
    const problems = await Problem.find({ company: 'Google' });
    res.json(problems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

problemRoutes.get('/mockProblems', async (req, res) => {
  try {
    const mockProblems = await Problem.find({ category: 'Mock Interview' });
    res.json(mockProblems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Authentication routes
const authRoutes = express.Router();

authRoutes.post('/signup', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create new user
    const newUser = new User({
      username,
      email,
      password // In a real app, you would hash the password first
    });
    
    await newUser.save();
    
    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

authRoutes.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Check password (in a real app, you would compare hashed passwords)
    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // In a real app, you would generate and return a JWT token here
    res.json({ message: 'Login successful', userId: user._id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Home routes
const homeRoutes = express.Router();

homeRoutes.get('/', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

homeRoutes.get('/:user_profile_name', async (req, res) => {
  try {
    const user = await User.findOne({ profileName: req.params.user_profile_name });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Register routes
app.use('/blogs', blogRoutes);
app.use('/company', companyRoutes);
app.use('/placement', placementRoutes);
app.use('/problems', problemRoutes);
app.use('/auth', authRoutes);
app.use('/home', homeRoutes);

// Static files for React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;