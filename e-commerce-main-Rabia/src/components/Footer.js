import React from 'react';

import CopyrightIcon from '@material-ui/icons/Copyright';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Footer() {

    const styles = {

        smallIcon: {
          width: 18,
          height: 18,
          marginRight: 10
        }       
      };

    let year = new Date();

    return (
        <footer>
            

            <div className="copyright">
                <CopyrightIcon style={styles.smallIcon} /> 
                <p>{`${year.getFullYear()}, Rabia Govez Contact: GitHub`}</p>
                <a href="https://github.com/rabiagovez" target="_blank" rel="noreferrer" ><GitHubIcon /></a>
            </div> 
        </footer>
    )
}
