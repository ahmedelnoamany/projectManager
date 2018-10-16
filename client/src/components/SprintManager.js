import React, { Component } from 'react';

export default class SprintManager extends Component {
  constructor(props){
    super(props);
    this.state = {
      sprints: [
        {name: 'Sprint 1', tasks: 15, team: 4, startDate:'10/15/2018' ,endDate: "10/26/2018" },
        {name: 'Sprint 2', tasks: 12, team: 4, startDate:'10/29/2018' ,endDate: "11/09/2018" },
        {name: 'Sprint 3', tasks: 19, team: 4, startDate:'11/12/2018' ,endDate: "11/23/2018" },
        {name: 'Sprint 2', tasks: 12, team: 4, startDate:'10/29/2018' ,endDate: "11/09/2018" },
        {name: 'Sprint 2', tasks: 12, team: 4, startDate:'10/29/2018' ,endDate: "11/09/2018" },
        {name: 'Sprint 2', tasks: 12, team: 4, startDate:'10/29/2018' ,endDate: "11/09/2018" },

      ]
    }
  }
  renderProjectSprints() {
    let { sprints } = this.state;
    if (sprints.length < 1) {
      return <span>Add your first Sprint!</span>
    }
    return (
      sprints.map((sprint, index) => {
        return (
          <div
            key={sprint.name + "-" + index}
            className="sprint-manager__sprint u-margin-bottom-small"
          >
          <span>{sprint.name}</span>

          </div>
        )
      })
    )
  }
  render() {
    return (
      <div className="sprint-manager">
        <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          <h3 className="heading-3 heading-3--dark u-margin-left-medium u-margin-top-small u-margin-bottom-small">Sprints</h3>
        </div>
        <div className="sprint-manager__sprints-container">
          {this.renderProjectSprints()}
        </div>
      </div>
    )
  }
}