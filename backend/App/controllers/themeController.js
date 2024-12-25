const Theme = require('../models/Theme');

// Create a new theme
exports.createTheme = async (req, res) => {
  try {
    const newTheme = new Theme(req.body);
    await newTheme.save();
    res.status(201).json(newTheme);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all themes
exports.getAllThemes = async (req, res) => {
  try {
    const themes = await Theme.find();
    res.status(200).json(themes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single theme by ID
exports.getThemeById = async (req, res) => {
  try {
    const theme = await Theme.findById(req.params.id);
    if (!theme) {
      return res.status(404).json({ message: 'Theme not found' });
    }
    res.status(200).json(theme);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a theme
exports.updateTheme = async (req, res) => {
  try {
    const updatedTheme = await Theme.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTheme);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a theme
exports.deleteTheme = async (req, res) => {
  try {
    await Theme.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Theme deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
