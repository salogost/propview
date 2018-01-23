import React, { Component } from 'react';
import imgSchoolPlaceholder from '../images/propview-school-placeholder.png';
import '../styles/css/PropSchool.css';

class PropOverview extends Component {
  constructor(props) {
    super(props)
    this.localProps = {
      schools: '',
    }
    this.schoolHTML = ''
  }

  render() {
    if (Object.keys(this.props.propData).length !== 0) {
      this.localProps = {
        schools: this.props.propData.schools,
      }

      this.schoolHTML = this.localProps.schools.map((key, i) => {
        if (i >= 4) {
          return null
        }
        else {
          return ([
            <li key={i}>
              <img src={imgSchoolPlaceholder} alt="school institution" />
              <h3>{this.toTitleCase(key.School.InstitutionName)}</h3>
              <p>Type: <span>{this.toTitleCase(key.School.Filetypetext)}</span></p>
              <p>Distance: <span>{key.School.distance}mi</span></p>
            </li>
          ])
        }
      })
    }
    return (
      <section className="prop-container off-white">
        <div className="prop-wrapper center-content">
          <h2>Schools Nearby</h2>
          <ul className="propschool-school-container">
            {this.schoolHTML}
          </ul>
        </div>
      </section>
    );
  }

  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}

export default PropOverview;
