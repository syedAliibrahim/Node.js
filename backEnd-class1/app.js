// module.exports={
//     x:14,
//     v:58,
//     z:function(){
//         return 54;
//     }
// }
const express =require("express");
const app = express()

const PORT =  process.env.PORT || 5000;





app.listen(PORT , ()=>
  console.log(`server running on http://localhost:${PORT}`)
);