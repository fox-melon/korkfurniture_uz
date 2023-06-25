import axios from "axios";

export default async function sendMessage(req, res) {


    let text = `<b>FullName:</b> ${req.query.full_name}\n\n <b>PhoneNumber:</b>${req.query.phone_number} \n\n <b> Description:</b>${req.query.description}`;


    try {
        let res = await axios.get(
            `https://api.telegram.org/bot5727638738:AAFdDCUubGcr4Ns5Bc-F4fVaM69dxUrJPp8/sendMessage?chat_id=-958266926&text=${text}&parse_mode=html&preventAdblock=true`
        );
    } catch (error) {
        console.log(error);
    }
    res.status(200).json({ message: 'ok' });
}