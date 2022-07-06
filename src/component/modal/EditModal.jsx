import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { height } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../../redux/slices/postSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const EditModal = ({ _id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [filterPost, setFilterPost] = useState("");

  const { posts } = useSelector((state) => state.post);
  let filterPostById = posts?.filter((item) => item._id === _id);

  const clickHandler = () => {
    setFilterPost(filterPostById[0].content);
  };

  return (
    <div className="relative ">
      <button onClick={handleOpen}>
        {" "}
        <EditOutlinedIcon onClick={clickHandler} />
      </button>
      <Modal
        keepMounted
        open={open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <h1>Edit Posts</h1>
          <Typography id="keep-mounted-modal-description">
            <TextareaAutosize
              maxRows={20}
              className="p-2 h-auto w-auto"
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              defaultValue={filterPost}
              style={{ width: 500, height: 400 }}
            />
            <div>
              <button onClick={handleClose}>Close</button>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
