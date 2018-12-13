import axios from 'axios'
import Api from './api'

export const getProjectInfo = () => {
    return axios.get(`${Api.projectList}/${id}`)
};