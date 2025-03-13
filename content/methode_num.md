---
title: Méthodes numériques
---
# TD 2
## Exercice 6 :
$T^{n+1} = AT^{n}+C$ -> Vecteur connu
$$
\begin{pmatrix}  
T_1\\  
T_2\\
.\\.\\T_{N-1}
\end{pmatrix}
=
\begin{pmatrix}  
1-2\lambda & \lambda & & \mathbf{0}\\  
\lambda & \diagdown & \diagdown & \\
&\diagdown&\diagdown&\diagdown\\
\mathbf{0}&&\lambda&1-2\lambda
\end{pmatrix}

\begin{pmatrix}
T_1\\T_2\\.\\.\\T_{N-1}
\end{pmatrix}
+
\begin{pmatrix}
\Delta t f_1^{n}\\\Delta t f_2^{n}\\.\\.\\\Delta t f_{N+1}^{n}
\end{pmatrix}
$$

$i=1 : T_1^{n+1}=(1-2\lambda)T_1^{n}+\lambda T_2^{n}+\lambda t_0^{n}+\Delta  t f_1^{n}$

$i=N-1:(1-2\lambda T_{N-1}^{n} +\lambda T_N^{n}+\lambda t_{N-2}^{n}+\Delta tf_N^{n}$

b) Neumann spatial

$$
\frac{\partial T}{\partial x}(0,t)=\alpha \iff \frac{\partial T}{\partial x}(x_0, t_n)=\alpha \iff \frac{T_1^{n}-T_0^{n}}{\Delta x}=\alpha \iff T_1^{n}-T_0^{n}=\alpha \Delta x
$$

