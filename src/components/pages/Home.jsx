import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../store/slices/counterSlice";
import React, { memo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, IconButton, Snackbar } from "@mui/material";
import { ShieldCloseIcon } from "lucide-react";

const Home = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  const { isPending, isError, data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
    staleTime: 60 * 1000,
  });

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <ShieldCloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div className="container">
      <h1>Home page</h1>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
        action={action}
      />
      <button
        onClick={() => {
          dispatch(increment());
        }}
        className="btn"
      >
        Counter {count}
      </button>
      <div className="flex flex-wrap justify-between gap-5">
        {isLoading ? (
          <span>Data is Loading ...</span>
        ) : (
          data.map((item) => {
            return (
              <div key={item.id} className="card overflow-hidden">
                <img
                  className="h-52 object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <div className="card-body">
                  <h2 className="card-header">{item.price}</h2>
                  <p className="text-content2">{item.description}</p>
                  <div className="card-footer">
                    <button className="btn-secondary btn">Buy Now</button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
const MemoHome = memo(Home);
export default MemoHome;
