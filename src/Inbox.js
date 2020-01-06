// Inbox.js
import React from "react";
import { Trans } from "@lingui/macro";

const Inbox = ({
  messages = ["a", "b"],
  markAsRead,
  user = { name: "Tien", lastLogin: "now" }
}) => {
  const messagesCount = messages.length;
  const { name, lastLogin } = user;

  return (
    <div>
      <h1>
        <Trans>Message Inbox</Trans>
      </h1>

      <p>
        <Trans>
          See all <a to="/unread">unread messages</a>
          {" or "}
          <a onClick={markAsRead}>mark them</a> as read.
        </Trans>
      </p>

      <p>
        {messagesCount === 1
          ? "There's {messagesCount} message in your inbox."
          : "There're {messagesCount} messages in your inbox."}
      </p>

      <footer>Last login on {lastLogin}.</footer>
    </div>
  );
};

export default Inbox;
