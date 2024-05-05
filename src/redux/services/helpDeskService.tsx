import axios from "axios";

const API_URL = 'http://localhost:4000/api/helpdesk';

const addHelpDeskTicket = async(helpDeskData:any) => {
    const response = await axios.post(API_URL,helpDeskData);
    if(response.data) {
        localStorage.setItem('helpDesk', JSON.stringify(response.data));
    }
    return response.data;
}

const getAllHelpDeskTickets = async(userData:any) => {
    const response = await axios.get(API_URL + `/${userData._id}`);
    return response.data;
}

const helpDeskService = {
    addHelpDeskTicket,
    getAllHelpDeskTickets
}

export default helpDeskService;