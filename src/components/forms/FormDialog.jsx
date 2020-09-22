import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "./TextInput";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      description: "",
    };
    this.inputName = this.inputName.bind(this);
    this.inputEmail = this.inputEmail.bind(this);
    this.inputDescription = this.inputDescription.bind(this);
  }
  inputName = (event) => {
    console.log(event.target.value)
    this.setState({ name: event.target.value });
  };
  inputEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  inputDescription = (event) => {
    this.setState({ description: event.target.value });
  };
  submitForm = () => {
      const name = this.state.name;
      const email = this.state.email;
      const description = this.state.description;
    
      const payload = {
          text :"お問い合わせがありました\n"+
          "お名前：" + name + "\n"+
          "Email：" + email + "\n"+
          "お問い合わせ内容：\n" + description + "\n"
        }
    const url = "https://hooks.slack.com/services/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"
    fetch(url,{
        method:"POST",
        body:JSON.stringify(payload)
    }).then(()=>{
        alert("送信完了しました。追ってご連絡します")
        this.setState({
            name :"",
            email :"",
            description :"",
        })
        return this.props.handleClose()
    })
          
  }
  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">問い合わせフォーム</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <TextField
              label={"お名前（必須）"}
              multiline={false}
              value={this.state.name}
              rows={1}
              onChange={this.inputName}
              type={"text"}
            />
            <TextField
              label={"メールアドレス（必須）"}
              multiline={false}
              value={this.state.email}
              rows={1}
              onChange={this.inputEmail}
              type={"email"}
            />
            <TextField
              label={"お問い合わせ内容"}
              multiline={true}
              value={this.state.description}
              rows={5}
              onChange={this.inputDescription}
              type={"text"}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.submitForm} color="primary">
            送信する
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
