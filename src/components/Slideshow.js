import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import SlideshowImages from './SlideshowImages.js';

class Slideshow extends Component {

    state = {
        allSlides: SlideshowImages,
        autorun: setTimeout(() => {this.triggerSlideshow('next', true)}, 5500),
        direction: 'next',
        trans: false
    }

    autoRun = () => {
        let runstatus = (this.state.autorun !== false) ? setTimeout(() => {this.triggerSlideshow('next', this.state.autorun)}, 5500) : this.state.autorun;
        this.setState({
            autorun: runstatus
        })
    }

    triggerSlideshow = (direction, autorun) => {
        clearTimeout(this.state.autorun)
        this.setState({
            autorun: autorun,
            direction: direction,
            trans: true
        })
    }

    shiftSlides = (allSlides) => {
        let newSlides = allSlides;
        let shiftSlide = newSlides.shift();
        newSlides.push(shiftSlide);
        return newSlides
    }

    unshiftSlides = (allSlides) => {
        let newSlides = allSlides;
        let popSlide = newSlides.pop();
        newSlides.unshift(popSlide);
        return newSlides
    }

    changeSlides = () => {
        let newSlides = (this.state.direction === 'next') ? this.shiftSlides(this.state.allSlides) : this.unshiftSlides(this.state.allSlides);
        this.setState({
            allSlides: newSlides,
            trans: false
        })
    }

    slideTemplate = () => {
        return (
            <div className="slidebox boxshadow">
            <CSSTransition
                in={this.state.trans}
                timeout={500}
                classNames="fade"
                onEntered={() => this.changeSlides()}
                onExited={() => this.autoRun()}
            >
                <div className="fade">
                    <img src={this.state.allSlides[0].img} className="slideimage" alt={this.state.allSlides[0].id} />
                    <div className="slideinfo">{this.state.allSlides[0].info}</div>
                </div>
            </CSSTransition>
            </div>
        )
    }

    render () {
        return (
            <div className="slideshow boxshadow">
                {this.slideTemplate()}
                <div className="slideshow-buttons">
                    <button className="slideshow-button" onClick={ () => this.triggerSlideshow('previous', false)}>&#8920;&nbsp;Previous</button>
                    <button className="slideshow-button" onClick={ () => this.triggerSlideshow('next', true)}>Autorun</button>
                    <button className="slideshow-button" onClick={ () => this.triggerSlideshow('next', false)}>Next&nbsp;&#8921;</button>
                </div>
            </div>
        )
    }
}

export default Slideshow;