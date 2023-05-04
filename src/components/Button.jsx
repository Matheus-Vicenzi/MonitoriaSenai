import React from "react";

export default function Button(props) {
  return (
    <div>
      <button className="button-field" value={props.name} />
    </div>
  );
}
