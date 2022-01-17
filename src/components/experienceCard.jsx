import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ExperienceCard({
  title,
  header,
  mainContent,
  subContentHeader,
  subContent,
  altText,
  imgSrc,
}) {
  const [expanded, setExpanded] = React.useState(false);
  let listItem = subContent;

  if (subContentHeader !== "Highlights:") {
    listItem = (
      <ul>
        {subContent
          .toString()
          .split(",")
          .map((item) => (
            <li>{item}</li>
          ))}
      </ul>
    );
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card sx={{ maxWidth: 425 }} style={{ marginBottom: "3vh" }}>
      <CardHeader
        avatar={<Avatar alt={altText} src={imgSrc} />}
        title={title}
        subheader={header}
      />
      <CardContent>
        <Typography variant="headline5" color="text.secondary">
          {mainContent}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="headline6">{subContentHeader}</Typography>
          <Typography variant="body2">{listItem}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
