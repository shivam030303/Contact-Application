<img 
  src={logo} 
  className={
    "App-logo" + 
    (this.props.rotating ? "":" App-logo-paused")
  } 
  alt="logo" 
  onClick={
    this.props.rotating ? 
      this.props.stopAction : this.props.startAction
  }
/>
