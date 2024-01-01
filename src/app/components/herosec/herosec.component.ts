import { Component, ElementRef, HostListener, OnInit, asNativeElements, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { gsap } from 'gsap';
import { GsapService } from '../../services/gsap.service';
import { setInterval } from 'timers';

@Component({
  selector: 'app-herosec',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './herosec.component.html',
})
export class HerosecComponent implements OnInit{
  loadingState = 0
  
  openNav(){
    const navBox = document.querySelector('#navBox')!
    const link1 = document.querySelector('.link1')!
    const link2 = document.querySelector('.link2')!
    const link3 = document.querySelector('.link3')!
    const link4 = document.querySelector('.link4')!
    const tl = gsap.timeline()
    const linkElements = [link1,link2,link3,link4]

    tl.to(navBox,{
      height:'100vh',
      duration:0.6,
      ease:'ease-out'
    }).from(linkElements,{
      y:80,
      rotate:'4deg',
      opacity:0,
      stagger:{amount:0.4},
      ease:'ease',
      duration:0.8
    }).to('#open',{
      scale:0,
      duration:0.1,
      ease:'ease'
    }).to('#close',{
      scale:1,
      duration:0.1,
      ease:'ease'
    })
  }
  closeNav(){
    const navBox = document.querySelector('#navBox')!
    const tl2 = gsap.timeline()

    const link1 = document.querySelector('.link1')!
    const link2 = document.querySelector('.link2')!
    const link3 = document.querySelector('.link3')!
    const link4 = document.querySelector('.link4')!

    const linkElements = [link4,link3,link2,link1]


    tl2.to(linkElements,{
      y:60,
      opacity:0,
      stagger:{amount:0.5},
      ease:'ease',
      duration:0.8
    }).to(navBox,{
      height:'0vh',
      duration:0.6,
      ease:'ease-out'
    }).to('#close',{
      scale:0,
      duration:0.3
    }).to('#open',{
      scale:1,
      duration:0.3
    }).to(linkElements,{
      y:0,
      opacity:1,
      stagger:{amount:0.05},
      ease:'ease',
      duration:0.1
    })

  }

  loadingAnimation(){
   const loadtl = gsap.timeline()
   loadtl.to('#loadingtext',{
      y:-150,
      duration:1,
      ease:'elastic'
    }).to('#loadingtext',{
      y:-250,
      duration:1,
      ease:'elastic'
    }).to('#loadingtext',{
      y:-640,
      duration:1
    }).to('#loadingbox',{
      y:-640,
      duration:1
    })
  }
  introAnimation(){
    gsap.from('#logo, #open ,#headingtext, #headbutton, #headpara, #box1, #box2, #box3, #box4',{
      y:-50,
      opacity:0,
      stagger:0.2,
      duration:0.8
    })
  }
  ngOnInit():void{
    this.loadingAnimation()
    setTimeout(() => {
      this.introAnimation()
    }, 3000);

    setTimeout(() => {
      this.loadingState = 40
    }, 900);
    setTimeout(() => {
      this.loadingState = 70
    }, 1600);
    setTimeout(() => {
      this.loadingState = 100
    }, 2300);

    
  }


}
