import React, { Component } from "react";
import PropTypes from "prop-types";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, time } = this.props;
    return (
      <>
        <div className="w-[350px] shadow-2xl rounded-xl overflow-hidden bg-slate-200">
          <img
            className="w-full h-48 object-cover"
            src={imageUrl}
            alt="Card Image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white-800">
              {title}...
            </div>
            <p className="text-gray-700 text-base">{description}...</p>
          </div>
          <div className="px-6 pb-6 flex items-center justify-between ">
            <a
              href={newsUrl}
              target="_blank"
              className="text-white rounded-lg hover:text-black bg-blue-400 px-3 py-2"
            >
              Read More
            </a>
            <small className="text-red-400">{time}</small>
          </div>
        </div>
      </>
    );
  }
}

export default Newsitem;
