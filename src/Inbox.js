// Inbox.js
import React from "react";
import { Trans, Plural, DateFormat } from "@lingui/macro";

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
        <Plural
          value={messagesCount}
          zero="There're no messages"
          one="There's # message in your inbox"
          other="There're # messages in your inbox"
        />
      </p>

      <footer>
        <Trans>
          Last login on <DateFormat value={lastLogin} />.
        </Trans>
      </footer>
    </div>
  );
};

export default Inbox;
