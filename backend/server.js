import app from "./index.js"
app.listen(process.env.PORT ,()=>{
    console.log(`server is listening at port no ${process.env.PORT}`)
});