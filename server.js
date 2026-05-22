const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('SIT753 DevOps Pipeline Running sucessfully');
});

const PORT = 3000;

// Only start server if file is run directly
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;