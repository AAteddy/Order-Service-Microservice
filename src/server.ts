import app from "./app.js";


const PORT = process.env.PORT || 4002;


app.listen(PORT, () => {
    console.log(`User Service is running on port ${PORT}`);
});