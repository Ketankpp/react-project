function Interpolationdemo2() {
  let title = `React Js`;
  let text = `If you've previously installed create-react-app globally, it is recommended that you uninstall the package to ensure npx
  always uses the latest version of create-react-app. To uninstall, run this command: npm uninstall -g create-react-app.`;
  let mytheme = "bg-primary text-light p-3 d-flex justify-content-center";
  let mytheme1 = "bg-danger text-light";

  return (
    <div>
      <h1 className={mytheme}>{title}</h1>
      <p className={mytheme1}>{text}</p>
    </div>
  );
}

export default Interpolationdemo2;
