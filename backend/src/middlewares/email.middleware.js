import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "rocio.rivas1801@alumnos.ubiobio.cl",
    pass: "xeok iwyt iais qxux",
  },
});

transporter.verify((error, success) => {
  if(error){
    console.error("Error", error);
  }else{
    console.log("Listo para enviar correos", success);}
});