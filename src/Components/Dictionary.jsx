import { Link, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ChipsSection from "./ChipsSection";

const styles = {
    root: {
        boxSizing: "border-box",
        padding: "1rem",
    },
    headingStyle: {
        fontSize: "2rem",
        fontWeight: "bold",

    },
    subHeading: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
    meaningContainer: {
        backgroundColor: "rgba(242, 242, 242, 0.8)",
        boxSizing: "border-box",
        padding: "1rem",
        borderRadius: "1rem"
    },
    textStyle: {
        fontSize: "1.3rem",
        fontWeight: "bold"
    }
};

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";

export default function Dictionary(props) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${BASE_URL}/${props.word}`);
                if (!response.ok) throw new Error("Word not found")
                const keyWord = await response.json();
                console.log(keyWord)
                setData(keyWord)
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null)
            }
        }
        fetchData();
    }, [props.word])
    return (
        <Stack sx={styles.root}>
            {error ? (
                <Typography color="error" variant="h5">{error}</Typography>
            ) : (
                <Stack direction={'column'} spacing={2}>
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'flex-start'}>
                        <Stack direction={'column'} spacing={1}>
                            <Stack direction={'row'} alignItems={'center'} spacing={2}>
                                <Typography sx={styles.headingStyle}>Keyword : </Typography>
                                <Typography fontSize={'2rem'}>{data?.[0]?.word || "Loading..."}</Typography>
                            </Stack>
                            <Typography color="rgba(211, 74, 240, 0.8)">{data?.[0]?.phonetics?.[0]?.text}</Typography>
                        </Stack>
                        <audio controls autoPlay>
                            <source src={data?.[0]?.phonetics?.[0]?.audio === '' ? data?.[0]?.phonetics?.[1]?.audio : data?.[0]?.phonetics?.[0]?.audio} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </Stack>                    {
                        data?.[0]?.meanings.map((d, index) => {
                            return (
                                <Stack key={index} direction={'column'} spacing={2} >
                                    <Stack sx={styles.meaningContainer} direction={'column'} className="container">
                                        <Typography sx={styles.subHeading}>{d?.partOfSpeech.charAt(0).toUpperCase() + d?.partOfSpeech.slice(1)}</Typography>
                                        <List sx={{ listStyleType: 'disc', pl: 4 }} >
                                            {
                                                d?.definitions.map((e, index) => {
                                                    return (
                                                        <ListItem key={index} sx={{ display: 'list-item' }}>

                                                            <ListItemText sx={{ fontFamily: "Bookman Old Style" }} primary={e.definition} />
                                                        </ListItem>
                                                    )

                                                })
                                            }
                                        </List>
                                    </Stack>
                                    {
                                        d.antonyms.length > 0 &&
                                        (
                                            <ChipsSection title={'Antonyms:'} list={d?.antonyms} color="success" />
                                        )
                                    }
                                    {
                                        d.synonyms.length > 0 &&
                                        (
                                            <ChipsSection title={'Synonyms:'} list={d?.synonyms} color="secondary" />
                                        )
                                    }
                                </Stack>
                            )
                        })
                    }
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Typography sx={styles.textStyle}>Source:</Typography>
                        <Link>{data?.[0]?.sourceUrls
                        }</Link>
                    </Stack>
                </Stack>
            )}
        </Stack>
    );
}
