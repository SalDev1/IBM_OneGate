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

const getAllHelpDeskTicketsByAdmin = async(user:any) => {
    const response = await axios.get(API_URL + `/tickets/admin`,user);
    return response.data;
}

const updateHelpDeskTicket = async(data:any) => {
    const currData = {
        status : data.status,
        ticketId : data.ticket._id
    }
    const response = await axios.put(API_URL+`/${currData.ticketId}`,currData);
    return response.data;
}

const helpDeskService = {
    addHelpDeskTicket,
    getAllHelpDeskTickets,
    getAllHelpDeskTicketsByAdmin,
    updateHelpDeskTicket,
}

export default helpDeskService;