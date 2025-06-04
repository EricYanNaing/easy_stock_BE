// @desc    Upload a file
// @route   POST /api/upload
// @access  Public
export const uploadFile = async (req, res) => {
  try {
    const file = req.file;

    // Check if file is provided
    if (!file) {
      return res.status(400).json({ 
        success: false, 
        message: "No file provided." 
      });
    }

    // Simulate file handling
    const filePath = `/uploads/${file.name}`;
    const result = {
      message: "File uploaded successfully.",
      imageUrl: file.path,
      public_id: file.filename,
    };

    // Send response
    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error("File upload error:", error);
    return res.status(500).json({ 
      success: false,
      message: "File upload failed.",
      error: error.message 
    });
  }
};