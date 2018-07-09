import React, {PureComponent} from 'react';

class Article extends PureComponent {

    // shouldComponentUpdate(nextProps,nextState){
    //     return this.state.isOpen!==nextState.isOpen
    // }

    componentWillMount() {
        console.log('---', 'mounting');
    }

    // componentWillReceiveProps(nextProps) {
    //     console.log('---', 'will receive props');
    //     if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
    //         isOpen: nextProps.defaultOpen
    //     })
    // }

    componentWillUpdate() {
        console.log('---', 'will update')
    }

    render() {
        const {article,isOpen,onButtonClick} = this.props;
        console.log('---', this.props);
        const body = isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto" style={{width: '50%'}}>
                <div className="card-header">
                    <h2>
                        {article.title}
                        <button onClick={onButtonClick} className="btn btn-primary btn-lg float-right">
                            {isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    {body}
                    <h6 className="card-subtitle text-muted">creation
                        date: {(new Date(article.date)).toDateString()}</h6>
                </div>
            </div>
        )
    }
}

export default Article;