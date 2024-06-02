import classes from "../Error/Error.module.scss";

function Error({children}) {
  return (
    <div className={classes.error}>
      <strong>{children}</strong> 
    </div>
  );
}
export default Error;
