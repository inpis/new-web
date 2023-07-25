import { useMemo } from "react";
import "./AccountContainer.css";
const AccountContainer = ({
  prop,
  createYourFree,
  account,
  prop1,
  connectYour,
  channels,
  propColor,
}) => {
  const divStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="div12">
      <div className="div13">
        <div className="content24">
          <div className="title2">
            <div className="div14">{prop}</div>
            <b className="create-your-free-container">
              <p className="create-your-free">{createYourFree}</p>
              <p className="create-your-free">{account}</p>
            </b>
          </div>
          <div className="building-ddfgan-enterprisedoes">
            Building ddfgan enterprisedoesn't need nightmare or cost your
            thousands. Felix is purpose built.
          </div>
        </div>
      </div>
      <div className="div15">
        <div className="content24">
          <div className="title2">
            <div className="div14" style={divStyle}>
              {prop1}
            </div>
            <b className="connect-your-channels-container">
              <p className="create-your-free">{connectYour}</p>
              <p className="create-your-free">{channels}</p>
            </b>
          </div>
          <div className="building-ddfgan-enterprisedoes">
            Building ddfgan enterprisedoesn't need nightmare or cost your
            thousands. Felix is purpose built.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountContainer;
