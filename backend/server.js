import app from "./app.js";
const port = process.env.PORT || 6000;
app.listen(port, () => {
    console.log(`SERVER HAS STARTED AT PORT ${port}`);
})