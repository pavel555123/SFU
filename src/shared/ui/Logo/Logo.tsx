import {memo} from "react";
import cls from './Logo.module.scss'

interface LogoProps {
    classname?: string
}

export const Logo = memo(({classname}: LogoProps) => {
    return (
        <div className={`${classname} ${cls.Logo}`}>
            <svg width="153" height="143" viewBox="0 0 153 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M23.8957 51.1221C25.2002 51.0849 26.4941 51.3685 27.6633 51.9479L38.8629 58.4251C39.9257 59.1699 40.8135 60.1376 41.4641 61.2607C42.1149 62.3838 42.5129 63.6353 42.6305 64.9278V77.8306C42.5094 79.1225 42.11 80.3726 41.4597 81.4953C40.8093 82.6177 39.9232 83.5861 38.8629 84.3336L27.6633 90.8108C26.4914 91.3802 25.198 91.6549 23.8957 91.6108C22.6012 91.6614 21.3147 91.3864 20.1539 90.8108L8.92855 84.3336C7.86819 83.5861 6.98234 82.6177 6.33198 81.4953C5.6814 80.3726 5.28205 79.1225 5.16098 77.8306V64.9278C5.27872 63.6353 5.67652 62.3838 6.32733 61.2607C6.97791 60.1376 7.86575 59.1699 8.92855 58.4251L20.1539 51.9479C21.3122 51.3634 22.599 51.0796 23.8957 51.1221ZM23.8957 45.9612C21.693 45.9204 19.5164 46.4448 17.5735 47.4836L6.34817 54.0382C4.50552 55.2421 2.97153 56.8614 1.86882 58.7662C0.766331 60.6711 0.12617 62.8082 0 65.0055V77.908C0.12617 80.1054 0.766331 82.2426 1.86882 84.1473C2.97153 86.052 4.50552 87.6716 6.34817 88.8754L17.5735 95.3524C19.5188 96.3826 21.6952 96.8977 23.8957 96.8494C26.1045 96.8966 28.2888 96.3815 30.2439 95.3524L41.4435 88.8754C43.2859 87.6716 44.8201 86.052 45.9226 84.1473C47.0253 82.2426 47.6653 80.1054 47.7914 77.908V65.0055C47.6653 62.8082 47.0253 60.6711 45.9226 58.7662C44.8201 56.8614 43.2859 55.2421 41.4435 54.0382L30.2439 47.561C28.2908 46.5242 26.1065 46.0004 23.8957 46.0386V45.9612Z"
                    fill="white"/>
                <path
                    d="M76.5129 51.1224C77.809 51.0853 79.0944 51.3689 80.2545 51.9481L91.4799 58.4253C92.5356 59.1755 93.4165 60.1449 94.0625 61.2674C94.7084 62.3898 95.1037 63.6387 95.2217 64.9283V77.8308C95.1004 79.1196 94.7035 80.3673 94.058 81.4893C93.4123 82.6113 92.5331 83.5814 91.4799 84.334L80.2545 90.811C79.0917 91.3804 77.8067 91.6552 76.5129 91.611C75.2106 91.6552 73.9172 91.3807 72.7453 90.811L61.52 84.334C60.4668 83.5814 59.5873 82.6113 58.9419 81.4893C58.2964 80.3673 57.8995 79.1196 57.7782 77.8308V64.9283C57.8961 63.6387 58.2915 62.3898 58.9374 61.2674C59.5831 60.1449 60.4643 59.1755 61.52 58.4253L72.7453 51.9481C73.9146 51.3687 75.2084 51.0851 76.5129 51.1224ZM76.5129 45.9614C74.3019 45.9232 72.1178 46.4472 70.1647 47.4838L58.9394 54.0385C57.1003 55.2436 55.5701 56.8639 54.4718 58.7688C53.3738 60.6738 52.7382 62.8102 52.617 65.0057V77.9085C52.7382 80.1039 53.3738 82.2403 54.4718 84.1453C55.5701 86.0503 57.1003 87.6705 58.9394 88.8757L70.1647 95.3529C72.1196 96.3818 74.3042 96.8969 76.5129 96.8496C78.7134 96.8982 80.8898 96.3829 82.8351 95.3529L94.0605 88.8757C95.8996 87.6705 97.43 86.0503 98.528 84.1453C99.6263 82.2403 100.262 80.1039 100.383 77.9085V65.0057C100.262 62.8102 99.6263 60.6738 98.528 58.7688C97.43 56.8639 95.8996 55.2436 94.0605 54.0385L82.8351 47.5612C80.8923 46.5224 78.7157 45.9982 76.5129 46.0388V45.9614Z"
                    fill="white"/>
                <path
                    d="M129.104 51.1221C130.409 51.0849 131.703 51.3685 132.872 51.9479L144.071 58.4251C145.134 59.1699 146.022 60.1376 146.673 61.2607C147.323 62.3838 147.721 63.6353 147.839 64.9278V77.8306C147.718 79.1225 147.319 80.3726 146.668 81.4953C146.018 82.6177 145.132 83.5861 144.071 84.3336L132.872 90.8108C131.7 91.3802 130.407 91.6549 129.104 91.6108C127.81 91.6614 126.523 91.3864 125.363 90.8108L114.137 84.3336C113.077 83.5861 112.191 82.6177 111.54 81.4953C110.89 80.3726 110.491 79.1225 110.37 77.8306V64.9278C110.487 63.6353 110.885 62.3838 111.536 61.2607C112.187 60.1376 113.074 59.1699 114.137 58.4251L125.363 51.9479C126.521 51.3634 127.808 51.0796 129.104 51.1221ZM129.104 45.9612C126.901 45.9204 124.725 46.4448 122.782 47.4836L111.557 54.0382C109.714 55.2421 108.18 56.8614 107.077 58.7662C105.975 60.6711 105.335 62.8082 105.209 65.0055V77.908C105.335 80.1054 105.975 82.2426 107.077 84.1473C108.18 86.052 109.714 87.6716 111.557 88.8754L122.782 95.3524C124.727 96.3826 126.904 96.8977 129.104 96.8494C131.313 96.8966 133.498 96.3815 135.452 95.3524L146.652 88.8754C148.494 87.6716 150.029 86.052 151.131 84.1473C152.234 82.2426 152.874 80.1054 153 77.908V65.0055C152.874 62.8082 152.234 60.6711 151.131 58.7662C150.029 56.8614 148.494 55.2421 146.652 54.0382L135.452 47.561C133.5 46.5242 131.315 46.0004 129.104 46.0386V45.9612Z"
                    fill="white"/>
                <path
                    d="M50.1913 97.0818C51.5047 97.0381 52.8083 97.3219 53.9848 97.9076L65.2101 104.385C66.2658 105.135 67.1468 106.104 67.7925 107.227C68.4384 108.349 68.834 109.598 68.952 110.888V123.791C68.8274 125.078 68.4291 126.325 67.7839 127.446C67.1384 128.568 66.261 129.538 65.2101 130.293L53.9848 136.822C52.8032 137.349 51.524 137.622 50.2301 137.622C48.9363 137.622 47.6568 137.349 46.4754 136.822L35.2501 130.345C34.1992 129.59 33.3216 128.619 32.6763 127.498C32.0311 126.376 31.6328 125.13 31.5082 123.842V110.939C31.6262 109.65 32.0218 108.401 32.6675 107.278C33.3134 106.156 34.1944 105.187 35.2501 104.436L46.4754 97.9592C47.6355 97.38 48.921 97.0962 50.2172 97.1335L50.1913 97.0818ZM50.2172 91.9725C48.0165 91.9239 45.8401 92.4392 43.8948 93.4692L32.6695 99.9462C30.8299 101.157 29.2997 102.782 28.2016 104.691C27.1038 106.6 26.4685 108.74 26.3472 110.939V123.842C26.4705 126.037 27.1067 128.173 28.2045 130.077C29.3026 131.982 30.8319 133.602 32.6695 134.809L43.8948 141.286C45.8401 142.316 48.0165 142.832 50.2172 142.783C52.4258 142.83 54.6103 142.315 56.5652 141.286L67.7907 134.809C69.6283 133.602 71.1576 131.982 72.2555 130.077C73.3535 128.173 73.9897 126.037 74.113 123.842V110.939C73.9917 108.74 73.3564 106.6 72.2586 104.691C71.1605 102.782 69.6303 101.157 67.7907 99.9462L56.5652 93.4176C54.6103 92.3887 52.4258 91.8736 50.2172 91.9208V91.9725Z"
                    fill="white"/>
                <path
                    d="M102.809 97.0813C104.105 97.0388 105.392 97.3228 106.55 97.9073L117.776 104.384C118.839 105.129 119.726 106.097 120.377 107.22C121.028 108.343 121.426 109.595 121.543 110.887V123.79C121.419 125.081 121.018 126.33 120.368 127.452C119.718 128.574 118.834 129.543 117.776 130.293L106.55 136.77C105.384 137.331 104.102 137.605 102.809 137.57C101.508 137.601 100.217 137.327 99.0412 136.77L87.8416 130.293C86.7834 129.543 85.8993 128.574 85.2492 127.452C84.5991 126.33 84.1982 125.081 84.074 123.79V110.887C84.1915 109.595 84.5895 108.343 85.2401 107.22C85.8909 106.097 86.7785 105.129 87.8416 104.384L99.0412 97.9073C100.21 97.3277 101.504 97.0443 102.809 97.0813ZM102.809 91.9204C100.6 91.8731 98.4154 92.3882 96.4606 93.4171L85.261 99.8943C83.4179 101.104 81.8839 102.728 80.7814 104.637C79.6791 106.546 79.0392 108.687 78.9128 110.887V123.79C79.0409 125.987 79.682 128.123 80.7845 130.028C81.8867 131.932 83.4199 133.552 85.261 134.757L96.4606 141.234C98.4154 142.263 100.6 142.778 102.809 142.731C105.009 142.78 107.186 142.264 109.131 141.234L120.356 134.757C122.197 133.552 123.73 131.932 124.833 130.028C125.935 128.123 126.576 125.987 126.704 123.79V110.887C126.578 108.687 125.938 106.546 124.836 104.637C123.733 102.728 122.199 101.104 120.356 99.8943L109.131 93.4171C107.186 92.3871 105.009 91.8718 102.809 91.9204Z"
                    fill="white"/>
                <path
                    d="M50.1917 5.16292C51.4965 5.12367 52.7907 5.40728 53.9593 5.98868L65.1846 12.4659C66.2403 13.216 67.1213 14.1855 67.7672 15.3079C68.4129 16.4304 68.8085 17.6792 68.9265 18.9688V31.8714C68.8052 33.1602 68.4083 34.4079 67.7626 35.5299C67.1171 36.6519 66.2379 37.622 65.1846 38.3743L53.985 44.9032C52.8036 45.4305 51.5242 45.703 50.2303 45.703C48.9365 45.703 47.6573 45.4305 46.4758 44.9032L35.2246 38.5551C34.1713 37.8027 33.2921 36.8326 32.6466 35.7106C32.0009 34.5886 31.604 33.3409 31.4827 32.0521V19.1493C31.6007 17.8597 31.9963 16.6111 32.642 15.4886C33.2879 14.3662 34.1689 13.3965 35.2246 12.6466L46.4499 6.16939C47.61 5.59021 48.8955 5.30639 50.1917 5.34364V5.16292ZM50.1917 0.182662C47.9888 0.141862 45.8124 0.666055 43.8695 1.7049L32.644 8.18212C30.8049 9.38727 29.2746 11.0077 28.1766 12.9127C27.0783 14.8177 26.443 16.9539 26.3217 19.1493V32.0521C26.443 34.2476 27.0783 36.384 28.1766 38.289C29.2746 40.1939 30.8049 41.8142 32.644 43.0193L43.8695 49.4966C45.8146 50.5265 47.9912 51.0419 50.1917 50.9933C52.4005 51.0405 54.5848 50.5254 56.5399 49.4966L67.7652 43.0193C69.6043 41.8142 71.1346 40.1939 72.2328 38.289C73.3309 36.384 73.9662 34.2476 74.0875 32.0521V19.1493C73.9662 16.9539 73.3309 14.8177 72.2328 12.9127C71.1346 11.0077 69.6043 9.38727 67.7652 8.18212L56.5656 1.5244C54.6126 0.487773 52.4284 -0.0361964 50.2175 0.00194275L50.1917 0.182662Z"
                    fill="white"/>
                <path
                    d="M102.809 5.16294C104.105 5.12015 105.392 5.4042 106.55 5.9887L117.776 12.4657C118.839 13.2107 119.726 14.1784 120.377 15.3015C121.028 16.4246 121.426 17.6761 121.543 18.9686V31.8714C121.422 33.1631 121.023 34.4134 120.372 35.5359C119.722 36.6586 118.836 37.6269 117.776 38.3744L106.55 44.8516C105.39 45.427 104.103 45.7022 102.809 45.6514C101.506 45.6955 100.213 45.421 99.0412 44.8516L87.8416 38.5551C86.781 37.8076 85.8951 36.8393 85.2448 35.7166C84.5944 34.5939 84.1948 33.3438 84.074 32.0519V19.1494C84.1915 17.8566 84.5895 16.6054 85.2401 15.4822C85.8909 14.3591 86.7785 13.3915 87.8416 12.6464L99.0412 6.1692C100.21 5.58979 101.504 5.30641 102.809 5.34344V5.16294ZM102.809 0.182457C100.598 0.144318 98.4134 0.668074 96.4606 1.70493L85.261 8.18192C83.4185 9.38596 81.8843 11.0055 80.7818 12.9103C79.6791 14.815 79.039 16.9519 78.9128 19.1494V32.0519C79.039 34.2494 79.6791 36.3863 80.7818 38.2912C81.8843 40.196 83.4185 41.8153 85.261 43.0194L96.4606 49.4964C98.4154 50.5255 100.6 51.0406 102.809 50.9931C105.009 51.0417 107.186 50.5266 109.131 49.4964L120.356 43.0194C122.199 41.8153 123.733 40.196 124.836 38.2912C125.938 36.3863 126.578 34.2494 126.704 32.0519V19.1494C126.578 16.9519 125.938 14.815 124.836 12.9103C123.733 11.0055 122.199 9.38596 120.356 8.18192L109.131 1.70493C107.188 0.665856 105.011 0.141879 102.809 0.182457Z"
                    fill="white"/>
            </svg>
            <h1 className={cls.logoText}>HardSmode</h1>
        </div>
    )
})
