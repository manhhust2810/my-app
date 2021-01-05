// import Symbol from './Symbol.js'
import NameTeam from './NameTeam.js'
import React from 'react'
// import './Draft.css'
import './TopCard.css'
export default function TopCard(props) {
  const {
    newName,
    handleEditTeamName,
    onChange,
    onEditNameTeam,
    isClickOnEditSymbol,
    cardName,
    onClearTeam,
    onClick,
    id,
    isEditing,
    onClickTickSymbol,
  } = props;

  const style = {
    icon: {
      color: "green"
    }
  }

  const [value, setValue] = React.useState(cardName);

  React.useEffect(() => {
    setValue('SETA')
  }, [isEditing])

  function handleClickEditNameTeam(event) {
    onEditNameTeam(id, event)
  }

  function handleChangeName(e) {
    const { value: newName } = e.target;
    setValue(newName)
  }

  function handleClickTickSymbol() {
    console.log(id, value)
    onClickTickSymbol(id, value)
  }

  return (
    <div>
      <ul className="topCardStyle"
        isClickOnEditSymbol={isClickOnEditSymbol}
        newName={newName}
      >
        {(isEditing)
          ?
          <>
            <input
              type="text"
              // onChange={onEditNameTeam}
              newName={newName}
              onChange={handleChangeName}
              onClick={handleEditTeamName}
            />
            <div
              className="iconStyle fas fa-check-circle symbolStyle"
              style={style.icon}
              onChange={onChange}
              onClick={handleClickTickSymbol}
              newName={newName}
            >
            </div>
          </>
          :
          <>
            <NameTeam
              className="nameStyle"
              cardName={cardName}
            />
            <div className="iconStyle">
              <div className="fas fa-edit symbolStyle"
                // onClick={onChangeName}
                onClick={handleClickEditNameTeam}>
              </div>
              <div className="fa fa-trash-o symbolStyle"
                onClick={onClick}
                // onChangeName={onChangeName}
                onClearTeam={onClearTeam}>
              </div>
            </div>
          </>
        }
        {/* <div className="iconStyle">
                    <div className="fas fa-edit symbolStyle"
                        // onClick={onChangeName}
                        onClick={onEditNameTeam}>
                    </div>
                    <div className="fa fa-trash-o symbolStyle"
                        onClick={onClick}
                        // onChangeName={onChangeName}
                        onClearTeam={onClearTeam}>
                    </div>
                </div> */}
      </ul>
    </div>
  )
}