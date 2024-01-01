import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {gsap} from 'gsap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
 
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
      ease:'easeIn'
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
}
