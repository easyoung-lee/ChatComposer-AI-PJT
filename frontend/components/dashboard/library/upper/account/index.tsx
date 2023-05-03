import React from "react";

function Account() {
  return (
    <div className="account flex items-center gap-2.5 mr-5">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABeElEQVRIie1UsUoDQRB9s9HjLFIfB7FS0+YDkiPVElJYBYPYWRkEK/2DtNoo2NopbmFjmSDkAmLjD1gJMRDtUuQShNzYXOBMWN2LFgZ81e7MvPdmdmGARQeZFrZarVUiOgcAZt4vFosdE54wNRBCSCLKEFFGCCFNed9OoJSyXNetMPMOEWWicEcIcdntdm+q1er73AbNZtOxLOuMiDY0JU9CiIN8Pv+m09A+kVLKion3mPkoCIJCEASFMAwPATwDyIZheKaUsnQ6S7qE4zhbE/HRaLQtpezH0neNRuPRtu1rAFnXdSsArhJNQERlAGDm4ylxAICUsk9EJ9G1rNP5ymANAIbD4YOuJp1O30dNrCc2AGADQKlUGugKcrncIGpmZR6DX8G/wR818H2/Fh3HBhrjKc4nzOwi3/drRLRn2uEULjzPO40HZib4gTgA7M7omTLb7fYtgMm6fvE8b9OEl+STl2Nn7ZKc24CZ6wBeAfRSqVQ9QWMLjg+lUmtsdk2HCgAAAABJRU5ErkJggg==" />
      <img
        src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
        alt=""
        className="person w-10"
      />
      <p className="account_p text-white text-base">John Doe</p>
    </div>
  );
}

export default Account;
