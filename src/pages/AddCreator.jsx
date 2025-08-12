import "./AddCreator.css"
import { useState, useEffect } from 'react'

export default function AddCreator() {

  return (
    <section className="add-creator-section">
      <div className="background-div"></div>
      <h1>
        ADD A CREATOR
      </h1>
      <div className="input-div">
        <h2>
          Name:
        </h2>
        <input
          type='text'
          placeholder="Your Creator Name"
          className="input-element"
        />
      </div>

      <div className="input-div">
        <h2>
          Description:
        </h2>
        <textarea
          type='text'
          placeholder="Your Creator Description"
          className="textarea-element"
          rows="5"
        />
      </div>

      <div className="input-div">
        <h2>
          Image URL:
        </h2>
        <input
          type='text'
          placeholder="Your Creator Image URL"
          className="input-element"
        />
      </div>

      <div className="input-div">
        <h2>
          Youtube Link:
        </h2>
        <input
          type='text'
          placeholder="Youtube Link (Optional)"
          className="input-element"
        />
      </div>

      <div className="input-div">
        <h2>
          Twitter Link:
        </h2>
        <input
          type='text'
          placeholder="Twitter Link (Optional)"
          className="input-element"
        />
      </div>

      <div className="input-div">
        <h2>
          Instagram Link:
        </h2>
        <input
          type='text'
          placeholder="Instagram Link (Optional)"
          className="input-element"
        />
      </div>

      <div className="button-div">
        <button className="create-button">
          Create
        </button>
      </div>
    </section>
  )
}