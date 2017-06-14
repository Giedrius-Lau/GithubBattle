var React = require('react');

class Popular extends React.Component {
    //Nustatome pagrindini taba, kuri rodys pakrovus puslapi
    constructor (props){
      super(props);
      this.state = {
        //By default tai bus tas pasirinktas tabas kuri rodys
        pasirinktaKalba: 'All'
      };

      //Si eilute skirta atriboti "this", kad nesimaisyti kiti
      this.atnaujintiKalba = this.atnaujintiKalba.bind(this);
    }

    //Nustatome metoda kaip atnaujinsime kalba, kai bus spaudziama ant naujo tabo
    atnaujintiKalba(lang){
      this.setState(function(){
        return {
          pasirinktaKalba: lang
        }
      });
    }

    render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
      <div>
        <ul className="languages">
          {languages.map(function (lang) {
            return (
                <li
                  style={lang === this.state.pasirinktaKalba ? {color: '#d0021b'}: null}
                  onClick={this.atnaujintiKalba.bind(null, lang)}
                  key={lang}>
                  {lang}
                </li>
            )
          }, this)}

        </ul>
      </div>
    )
  }
}

module.exports = Popular;
