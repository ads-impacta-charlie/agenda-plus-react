'use client';
import { Box, Container } from '@mui/material';
import React from 'react';
import styles from './Login.module.css';
import logo from './Assets/Logo.svg'
import Image from 'next/image';


export default function Login(){
    return(
        <Box className={styles.box}>
            <Container className={styles.container}>
                <Image src={logo} alt='logo' className={styles.logo} />
                <input className={styles.input} type='text' placeholder='Usuário'></input>
                <input className={styles.input} type='password' placeholder='Senha'></input>
                <button className={`${styles.input} ${styles.btn}`} type='submit' style={{backgroundColor: '#E2BE81', marginTop:'40px'}}>Login</button>
                <p style={{color:'whitesmoke', fontSize:'12px'}}>Ainda não tem conta? <a href="#" style={{color:'#00FFFF', cursor:'pointer'}}>Registre-se</a> aqui!</p>
            </Container>
        </Box>
    )
};