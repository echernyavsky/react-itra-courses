import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import routes from "../../../shared/constants/routes.js";
import EmailTemplatesTable from "./EmailTemplatesTable.jsx";
import { getTemplates } from "../../../shared/apis/emailTemplatesApi.js";

export default function EmailTemplatesList() {
    const [templates, setTemplates] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getTemplates();
            return data.map(it => ({
                id: it.id,
                ...it.attributes
            }));
        }

        fetchData()
            .then((data) => {
                setTemplates(data);
            });
    }, []);

    const onCreateNewTemplateClick = () => {
        navigate(routes.EMAIL_TEMPLATES.NEW);
    }

    return (
        <>
            <Box my={2}>
                <h1>Email Templates List</h1>
            </Box>
            <Box my={2}>
                <Button variant="contained" onClick={onCreateNewTemplateClick}>Create new template</Button>
            </Box>
            <Box my={2}>
                <EmailTemplatesTable rows={templates} />
            </Box>
        </>
    )
}