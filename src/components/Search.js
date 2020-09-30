import React, { useState, useEffect } from "react";
import { wikiHttp } from "../apis/http";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginBottom: "0.9rem",
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    fontSize: 14,
  },
  title: {
    color: "black",
    fontWeight: 500,
  },
  snippet: {
    fontStyle: "italic",
  },
  navigate: {
    textDecoration: "none",
  },
});

const Search = ({ term, cap }) => {
  const classes = useStyles();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await wikiHttp.get("/api.php", {
        params: {
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    search();
  }, [term]);

  const renderedResults = results.slice(0, cap).map((result) => {
    return (
      <Card key={result.pageid} className={classes.root}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" className={classes.title}>
            {result.title}
          </Typography>
          <Typography
            variant="body2"
            className={classes.snippet}
            dangerouslySetInnerHTML={{ __html: result.snippet + "..." }}
          />
        </CardContent>
        <CardActions>
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className={classes.navigate}
          >
            <Button size="small">Go</Button>
          </a>
        </CardActions>
      </Card>
    );
  });

  return <div>{renderedResults}</div>;
};

export default Search;
