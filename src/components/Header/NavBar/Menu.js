import React from 'react'

const Menu = () => {
    return (
    <ul id="navbar-menu" className="navbar-menu">
        <li><a href="#">Sample</a></li>

        <li><a href="#">Dropdown
            <span className="drop-icon">▾</span>
            <label title="Toggle Drop-down" className="drop-icon" for="sm0">▾</label>
          </a>
          <input type="checkbox" id="sm0"/>
          <ul className="sub-menu">
            <li><a href="#">Item 1.1</a></li>
            <li><a href="#">Item 1.2</a></li>
            <li><a href="#">Item 1.3</a></li>
            <li><a href="#">Item 1.4</a></li>
          </ul>
        </li>

        <li><a href="#">2-level DD 
            <span className="drop-icon">▾</span>
            <label title="Toggle Drop-down" className="drop-icon" for="sm1">▾</label>
          </a>
          <input type="checkbox" id="sm1"/>
          <ul className="sub-menu">
            <li><a href="#">Item 2.1</a></li>
            <li><a href="#">Item 2.2
                <span className="drop-icon">▸</span>
                <label title="Toggle Drop-down" className="drop-icon" for="sm2">▾</label>
              </a>
              <input type="checkbox" id="sm2"/>
              <ul className="sub-menu">
                <li><a href="#">Item 2.2.1</a></li>
                <li><a href="#">Item 2.2.2</a></li>
                <li><a href="#">Item 2.2.3</a></li>
              </ul>
            </li>
            <li><a href="#">Item 2.3</a></li>
          </ul>
        </li>

        <li><a href="#">Multiple Levels
                <span className="drop-icon">▾</span>
                <label title="Toggle Drop-down" className="drop-icon" for="sm3">▾</label>
            </a>
            <input type="checkbox" id="sm3"/>
            <ul className="sub-menu">
            <li><a href="">3.1
                <span className="drop-icon">▸</span>
                <label title="Toggle Drop-down" className="drop-icon" for="sm4">▾</label>
            </a>
            <input type="checkbox" id="sm4"/>
                <ul className="sub-menu">
                    <li><a href="">3.1.1</a></li>
                    <li><a href="">3.1.2</a></li>
                    <li><a href="">3.1.3</a></li>
                    <li><a href="">3.1.4</a></li>
                </ul>
            </li>
            <li><a href="">3.2
                <span className="drop-icon">▸</span>
                <label title="Toggle Drop-down" className="drop-icon" for="sm5">▾</label>
            </a>
            <input type="checkbox" id="sm5"/>
                 <ul className="sub-menu">
                    <li><a href="">3.2.1</a></li>
                    <li><a href="">3.2.2</a></li>
                    <li><a href="">3.2.3</a></li>
                </ul>
            </li>
            <li><a href="">3.3
                <span className="drop-icon">▸</span>
                    <label title="Toggle Drop-down" className="drop-icon" for="sm6">▾</label>
                </a>
                <input type="checkbox" id="sm6"/>
                <ul className="sub-menu">
                    <li><a href="">3.3.1</a></li>
                    <li><a href="">3.3.2</a></li>
                    <li><a href="">3.2.2</a></li>
                    <li><a href="">3.3.4</a></li>
                    <li><a href="">3.3.5</a></li>
                </ul>
            </li>
            </ul>
        </li>
        
        <li><a href="#">Sample #2</a></li>

        <li><a href="#">Another DD
              <span className="drop-icon">▾</span>
                <label title="Toggle Drop-down" className="drop-icon" for="sm8">▾</label>
              </a>
              <input type="checkbox" id="sm8"/>
            <ul className="sub-menu">
              <li><a href="">4.1</a></li>
              <li><a href="">4.2</a></li>
              <li><a href="">4.2</a></li>
              <li><a href="">4.4</a></li>
            </ul>    
        </li>
      </ul>

    )
}

export default Menu