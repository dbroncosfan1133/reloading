import React from "react";

function SearchForm(props) {
  return (
    <div className="field has-addons">
      <div className="control">
        <input className="input" type="text" placeholder="Search.."></input>
      </div>
      <div className="control">
        <div className="button is-link">
          <i class="fas fa-search"></i>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;
