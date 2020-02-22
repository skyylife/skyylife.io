import React from 'react'
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { Card } from 'react-bootstrap'

const Container = styled.div`
  margin: 0;
  display: flex;
  column-count: 1;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  width: auto;
`

const CardWrapperRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 0;
  width: auto;
`

const ProPic = styled.img`
  width: 96px;
  height: 96px;
  margin: 0;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%
  margin-left: 18px;
  padding: 12px;
`

const Name = styled.h2`
  display: flex;
  align-self: center;
  margin: 0;
  padding: 0;
`

const Excerpt = styled.p`
  display: flex;
  margin: 0;
`

const User = props => (
	<CardWrapper>
		<ProPic src={props.avatar} alt='' />
		<Description>
			<Name>{props.name}</Name>
			<Excerpt>{props.excerpt}</Excerpt>
		</Description>
	</CardWrapper>
)

const UserRight = props => (
	<CardWrapperRight>
		<ProPic src={props.avatar} alt='' />
		<Description>
			<Name>{props.name}</Name>
			<Excerpt>{props.excerpt}</Excerpt>
		</Description>
	</CardWrapperRight>
)

const About = () => {
		return (
			<Container>
				<h2 style={{ fontSize: '280%' }}>Mission Statement:</h2>
				<p>Our Mission is ...</p>
				<h2 style={{ fontSize: '280%' }}>The High Council</h2>
				<User 
					name='James Jarrett'
					avatar=''
					excerpt='This is James, the CEO'
				/>
				<UserRight 
					name='Sharrone Berry-Davis'
					avatar=''
					excerpt='This is Sharrone, the CFO'
				/>
				<User 
					name='Aaron Shepherd'
					avatar=''
					excerpt='This is Aaron, the CTO'
				/>
				<UserRight 
					name='Dymon Johnson'
					avatar=''
					excerpt='This is Dymon, the CDO'
				/>
				<User 
					name='Quincey Thomas'
					avatar=''
					excerpt='This is Quincey, the CPO'
				/>
			</Container>
		)
}


export default About
