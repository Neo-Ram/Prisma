import styles from './CustomColors.module.css';
function CustomColors() {
    return (        
        <div className={styles.container}>
            <div className={styles.chat}>
                <div className={styles.messagebot}>Aqui estara la respuesta del bot</div>
                <div className={styles.message}>
                    <p>Aqui estara el mensaje mio</p>
                </div>

            </div>
            <div className={styles.inputArea}>
                <input type="text" placeholder="Escribe tu mensaje..." />
                <button >Enviar</button>
            </div>
      
        </div>
    );
  }

  export default CustomColors;