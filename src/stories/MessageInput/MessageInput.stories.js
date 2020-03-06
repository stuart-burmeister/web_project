import React from "react";
import { MessageInput } from "../../components";
import { action } from "@storybook/addon-actions";

export default {
  component: MessageInput,
  title: "Message Input",
  excludeStories: /.*Data$/,
};

export const Default = () => {
  return <MessageInput setMessage={(msg)=>{
    action("Message input")(msg);
  }}/>
}