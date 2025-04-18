# Stanford CS231n Computer Vision (2022)

[GitHub](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision)

## Assignment 0: Python Numpy

[Python Tutorial](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment0_Python/python.ipynb)

- Jupyter and Colab Notebooks
- Python
  - Basic data types, Containers(Lists, Dictionaries, Sets, Tuples)
  - Functions
  - Classes
- Numpy
  - Arrays
  - Array indexing (**Boolean/ Integer Array Indexing**)
  - Datatypes
  - Array math
  - Broadcasting
- SciPy
  - Image operations
  - MATLAB files
  - Distance between points
- Matplotlib
  - Plotting, Subplots, Images

## Assignment 1: Neural Networks

Data-driven approach ( Train/ Predict stages)

## Image Classification Pipeline

[The CIFAR-10 dataset](http://www.cs.toronto.edu/~kriz/cifar.html)

- 32x32 resolution RGB colour images in 10 classes, with 6000 images per class. There are 50000 training images and 10000 test images.

Visualize the dataset

```
idxs = np.random.choice(idxs, samples_per_class, replace=False) 
```

![CIFAR-10](asset/photo/Assignment/10/CIFAR-10.png)

```
Training data shape:  (50000, 32, 32, 3) 
# Training Images = 50000, Resolution = 32x32, RGB = 3, Class = 10.
Training labels shape:  (50000,) 
```

### k-Nearest Neighbor (kNN)

Q1 [k-Nearest Neighbor classifier](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment1/knn.ipynb)

- **Training**: take the training data (num_train, D) and simply remembers it.
- **Testing**:  classify every test image by comparing to all training images and transferring the labels of the k most similar training examples.

  - compute the distance matrix between each test point in X and each training point  shape = **$N_{te} \times N_{tr}$**
    ![DistanceMatrix](asset/photo/Assignment/10/DistanceMatrix.png)
  - L1, L2 distances, np.linalg.norm()
    - $$
      ||X|| = \sqrt{|\sum_{i,j} x_{i,j}^2|}
      $$
  - Prediction

  ```Python
  '''For each test sample with index i''' 
     closest_y= self.y_train[np.argsort(dists[i])[:k]]
     y_pred[i]=np.argmax(np.bincount(closest_y))
  ```

  - the best value of k (hyperparameter) is *cross-validated*

![knn_Cross-validation](asset/photo/Assignment/10/Cross-Validation_on_k.png)

[kNN Online Demo](http://vision.stanford.edu/teaching/cs231n-demos/knn/)

## Linear Classifier: Parametric approach

Score function,

$y = f(x^{3072}, W^{10 \times 3072}) = W x +b  + \alpha R(W)$

[Linear Classifier](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment1/cs231n/classifiers/linear_classifier.py)

See more at Lecture 2-3 and related reading.

```
Train data shape:  (49000, 32, 32, 3)
Train labels shape:  (49000,)

Validation data shape:  (1000, 32, 32, 3)
Validation labels shape:  (1000,)
# to tune the learning rate and regularization strength

Test data shape:  (1000, 32, 32, 3)
Test labels shape:  (1000,)
```

Preprocessing

- Reshape image into flattened row  `(_,3072)`;
- Normalization, center, scale;
  - Subtract the mean image from train and test data
- Add bias dimension term one

Loss function

- fully-vectorized
- **Gradient Check**

  - Analytic gradient: exact, fast, error-prone,
  - Numerical gradient: easy-to-write but slow.
  - Using the latter to make sure everything is right.
- with regulation term

  - L1 / L2 / Elastic net (L1+L2)
- Optimize the loss function with SGD

  - SGD  / SGD+Momentum / RMSProp  / Adam

    - Adam is a good default choice in many cases; it often works ok even with constant learning rate
    - SGD+Momentum can out perform Adam but may require more tuning of LR and schedule
    - If full batch updates then try out L-BFGS (and don’t forget to disable all sources of noise)

  ![Loss Linear](asset/photo/Assignment/10/LossLinear.png)

  - Visualize the final learned weights

### SVM

Q2 [Training a Support Vector Machine](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment1/svm.ipynb)

Preprocessing:

- Subtract the mean image from train and test data
  - ![Mean-Image-validation](asset/photo/Assignment/10/MeanImageVisualization.png)

Loss Function: [Hinge loss](https://en.wikipedia.org/wiki/Hinge_loss) max-margin classification

The SVM “wants” the correct class for each image to a have a score higher than the incorrect classes by some fixed margin Delta = 1.

score vector $s=f(x_i,W)$

$$
L_i = \sum_{j \neq y_i} max(0, s_j -s_i +1)
$$

```
|\ Loss
| \
|   \
O _ _ 1 = = 2 = = 3.  delta_s 
		    = correct class - incorrect class 
```

Split data into train, val; choose hyperparameter on val and evaluate on test

![svm_Cross-validation](asset/photo/Assignment/10/svm_Cross-validation.png)

### Softmax

Q3 [Implement a Softmax classifier](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment1/softmax.ipynb)

$$
P(Y=k |X=x_i)= \frac{exp(s_k)}{\sum_j exp(s_j)}
$$

Loss Function: [Cross-entropy](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjxzcKM4YWDAxXFR0EAHflmCksQFnoECBkQAQ&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCross-entropy&usg=AOvVaw228IHK-lfaJa7UIBg6wMJX&opi=89978449)

$$
L_i = - log P(Y=y_i|X=x_i)
$$

![learned weights](asset/photo/Assignment/10/learnedWeights.png)

## Two-Layer Neural Network

Score function,

$y = f(x^{3072}, W_1^{H \times 3072}, W_2^{10 \times H}) =W_2 \sigma(W_1x + b_1) + b_2$

Hierarchical computation $3072 \rightarrow H \rightarrow C=10$.

- Activation function $\sigma$
- Sigmoid / (Leeky) ReLU / tanh / Maxout / ReLU / ELU

See more at Lecture 4 and related reading.

Q4 [Two-Layer Neural Network](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment1/two_layer_net.ipynb)

The architecture is

affine - relu - affine - softmax.

![LossAcc](asset/photo/Assignment/10/LossAccTwoLayerNet.png)

## Image Features

Q5 [Higher Level Representations: Image Features](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment1/features.ipynb)

Color Histogram (hue channel in HSV);  Histogram of Oriented Gradients.

## Assignment 2: Further Image classification, CNN

Q1: [Multi-Layer Fully Connected Neural Networks](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment2/FullyConnectedNets.ipynb)

Extend the Neural Network to n layers.

**Optimizer** Implementation

First-order method

- Vanilla SGD

```python
# Vanilla update
x += - learning_rate * dx
```

- SGD + Momentum

```python
# Momentum update
v = mu * v - learning_rate * dx # integrate velocity
x += v # integrate position
```

- Nesterov Momentum

```python
x_ahead = x + mu * v
# evaluate dx_ahead (the gradient at x_ahead instead of at x)
v = mu * v - learning_rate * dx_ahead
x += v
```

Second-order methods

Adaptive learning rate methods

- RMSProp

```python
cache = decay_rate * cache + (1 - decay_rate) * dx**2
x += - learning_rate * dx / (np.sqrt(cache) + eps)
```

- Adam

```python
# t is your iteration counter going from 1 to infinity
m = beta1*m + (1-beta1)*dx
# mt = m / (1-beta1**t) 		# bias correction
v = beta2*v + (1-beta2)*(dx**2)         # RMSProp with Momentum
# vt = v / (1-beta2**t)			# bias correction
x += - learning_rate * mt / (np.sqrt(vt) + eps)
```

![Optim](asset/photo/Assignment/10/Optim.png)

Q2: [Batch/Layer Normalization](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment2/BatchNormalization.ipynb)

Q3: [Dropout](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment2/Dropout.ipynb)

Q4: [Convolutional Neural Networks](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment2/ConvolutionalNetworks.ipynb)

**Convolution**

$$
input (N,C_{in},H,W), weight(N, C_{in}, HH, WW), bias(C_{out}); out(N, C_{out}, H', W')
$$

$$
H' = 1 + (H + 2 * pad - HH) / stride
$$

$$
W' = 1 + (W + 2 * pad - WW) / stride
$$

```python
# x (N, C, H, W)

x = np.pad(x, ((0,), (0,), (pad,), (pad,)), 'constant', constant_values = 0)   
# (N, C, H+2*pad, W+2*pad) 
 
x_col = x.T  
# (W+2*pad, H+2*pad, C, N)

x_col = np.lib.stride_tricks.sliding_window_view(x_col, (WW,HH,C,N))   
# ((W+2*pad-WW, H+2*pad-HH), WW, HH, C, N)
  
x_col = x_col.T[...,::stride,::stride]
# (N, C, HH, WW, H_, W_)
  
x_col = x_col.reshape(N, C*HH*WW, -1)
# (N, C*HH*WW,  H_ * W_)  
```

$$
out(N_i,C_{out_j})= bias(C_{out_j})+ \sum_{k=0}^{C_{in}−1} weight(C_{out_j},k)⋆input(N_i,k)
$$

```python
out = (w_row @ x_col).reshape(N, F, H_, W_) + b[np.newaxis, :, np.newaxis, np.newaxis] 
```

Example: Sobel operator for edge detection, or filter for gray-scale conversion

**Max Pool**

For each N, C, find the max among pool_height * pool_width.

**Normalization**

- Spatial Batch  ~ Batch
- Spatial Group  ~ Layer (with spatial consideration)

Q5: [PyTorch on CIFAR-10](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment2/PyTorch.ipynb)

**Preparation**

```python
transform = T.Compose([
                T.ToTensor(),
                T.Normalize((0.4914, 0.4822, 0.4465), (0.2023, 0.1994, 0.2010))
            ])

cifar10_train = dset.CIFAR10('./cs231n/datasets', train=True, download=True,
                             transform=transform)
loader_train = DataLoader(cifar10_train, batch_size=64, 
                          sampler=sampler.SubsetRandomSampler(range(NUM_TRAIN)))
x.view(N, -1) # reshape
```

| API               | Flexibility | Convenience |
| ----------------- | ----------- | ----------- |
| Barebone          | High        | Low         |
| `nn.Module`     | High        | Medium      |
| `nn.Sequential` | Low         | High        |

- [nn.init](https://pytorch.org/docs/master/nn.init.html) package contains convenient initialization methods.

```python
nn.init.kaiming_normal_(self.fc.weight)
```

- PyTorch: Two-Layer Network
- PyTorch: Three-Layer ConvNet
- PyTorch: CIFAR-10 **open-ended challenge**
- Alternative optimizers (Adam, Adagrad, RMSprop, etc.)
- Alternative activation functions such as leaky ReLU, parametric ReLU, ELU, or MaxOut.
- Model ensembles
- Data augmentation
- New Architectures
  - [This blog has an in-depth overview](https://chatbotslife.com/resnets-highwaynets-and-densenets-oh-my-9bb15918ee32)
  - [ResNets](https://arxiv.org/abs/1512.03385) where the input from the previous layer is added to the output.
    $$
    y = f(x) + x
    $$
  - [DenseNets](https://arxiv.org/abs/1608.06993) where inputs into previous layers are concatenated together.
    $$
    y = f(x,x-1,x-2…,x-n)
    $$

Q6: [Network Visualization: Saliency Maps, Class Visualization, and Fooling Images](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment2/Network_Visualization.ipynb)

**Saliency Maps.** tell which part of the image influenced the classification decision made by the network.

![Saliency Maps](asset/photo/Assignment/10/saliency_map.png)

**Fooling Images.** perturb an input image so that it appears the same to humans but will be misclassified by the pre-trained network.

![fooling image](asset/photo/Assignment/10/fooling_image.png)

**Class Visualization.** synthesize an image to maximize the classification score of a particular class; this can give us some sense of what the network is looking for when it classifies images of that class.

![Class Visualization](asset/photo/Assignment/10/class_visualization.png)

```python
s.gather(1, y.view(-1, 1)).squeeze() # Numpy of s[np.arange(N), y] in PyTorch
```

## Assignment 3: Image Captioning, GAN, Transformer, LSTM

Q1: [Image Captioning with Vanilla RNNs](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment3/RNN_Captioning.ipynb)

*Dataset*: 2014 [COCO dataset](https://cocodataset.org/), a standard testbed for image captioning.

**Image Captioning**, define hidden state as $h$.

> Image feature                             --- *affine_forward* $\rightarrow$ initial $h_0$ state
>
> Captions $x\in (N×T×Z^+)$ --- *word_embedding* $\rightarrow$ $x \in (N×T×R^D)$

For $N$ batches, the input sequences are encoded from $\mathbb{R}^{T \times Z^+}$ to $\mathbb{R}^{T \times D}$, where each sequence is composed of $T$ vectors, each of dimension $D$.

**RNN**, for each step $t \in T$, do $h_t = f_W(h_{t-1}+x_t)$, specifically,

$$
h_t = tanh( x \cdot W_x + h_{t-1} \cdot W_h + b )
$$

> $h_n$ --- *temporal_affine_forward* $\rightarrow$ Score in the $Vocabulary$ $\rightarrow$ Predicted Word $y_{pred}$

$$
loss  = \text{temporal-softmax-loss}  (y_{pred}, y_{GT})
$$

Q2: [Image Captioning with Transformers](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment3/Transformer_Captioning.ipynb)

**Multi-head attention** $Y \in \mathbb{R}^{N\times S \times E}= [Y_1;\dots;Y_h] A$

For $N$ batches, $S$ is the source sequence length, $T$ is the target sequence length, and $E$ is the embedding dimension. With input data $X_Q\in \mathbb{R}^{N\times S \times E}$, $X_K\in \mathbb{R}^{N\times T \times E}$, $X_V\in \mathbb{R}^{N\times T \times E}$, and weight matrices $A, Q, K, V$,

$$
\begin{equation} 
Y_i = \text{softmax}\bigg(\frac{(XQ_i)(XK_i)^\top}{\sqrt{d/h}}\bigg)(XV_i)
\end{equation}
$$

**Positional encoding** $X+f_p(cos,sin)$

Q3: [Generative Adversarial Networks](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment3/Generative_Adversarial_Networks.ipynb)

*Dataset*: [MNIST dataset](https://pytorch.org/vision/main/generated/torchvision.datasets.MNIST.html) (Modified National Institute of Standards and Technology), a large database of handwritten digits that is commonly used for training various image processing systems

It's a back and forth process of the generator ($G$) trying to fool the discriminator ($D$) and the discriminator trying to correctly classify real vs. fake as a minimax game:

$$
\underset{G}{\text{minimize}}\; \underset{D}{\text{maximize}}\; \mathbb{E}_{x \sim p_\text{data}}\left[\log D(x)\right] + \mathbb{E}_{z \sim p(z)}\left[\log \left(1-D(G(z))\right)\right]
$$

, where $z \sim p(z)$ are the random noise samples, $G(z)$ are the generated images using the neural network generator $G$, and $D$ is the output of the discriminator, specifying the probability of an input being real.

Extension: Least squares GAN (LSGAN), Deeply Convolution GAN.

Q4: [Self-Supervised Learning for Image Classification](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment3/Self_Supervised_Learning.ipynb)


Self-supervised learning (SSL) allows models to automatically learn a "good" representation space using the data in a given dataset without the need for their labels.

Contrastive learning aims to learn similar representations for similar images and different representations for different images.


Q5: Extra Credit [Image Captioning with LSTMs](https://github.com/PeterHUistyping/Stanford_CS231n-Deep_Learning-for-Computer_Vision/blob/master/MyProject22/assignment3/LSTM_Captioning.ipynb)

Due to vanishing and exploding gradients caused by repeated matrix multiplication, RNNs can be tough to train on long sequences. LSTMs solve it by replacing the simple update rule with a gating mechanism.

Similarly, **LSTMs** receive at each timestep $t$ an input $x_t\in\mathbb{R}^D$ and the previous hidden state $h_{t-1}\in\mathbb{R}^H$. It also maintains an $H$-dimensional *cell state*, so we also receive the previous cell state $c_{t-1}\in\mathbb{R}^H$. At each timestep we first compute an *activation vector*,

$$
a \in \mathbb{R}^{4H} = W_x \cdot x_t + W_h \cdot h_{t-1}+b
$$

, where learnable parameters of the LSTM are an *input-to-hidden* matrix $W_x\in\mathbb{R}^{4H\times D}$, a *hidden-to-hidden* matrix $W_h\in\mathbb{R}^{4H\times H}$ and a *bias vector* $b\in\mathbb{R}^{4H}$.

We then divide this into four vectors $a_i,a_f,a_o,a_g\in\mathbb{R}^H$ where $a_i$ consists of the first $H$ elements of $a$, $a_f$ is the next $H$ elements of $a$, etc.

The *input gate* $g\in\mathbb{R}^H$, *forget gate* $f\in\mathbb{R}^H$, *output gate* $o\in\mathbb{R}^H$ and *block input* $g\in\mathbb{R}^H$ as

$$
i = \sigma(a_i) \hspace{2pc}
f = \sigma(a_f) \hspace{2pc}
o = \sigma(a_o) \hspace{2pc}
g = \tanh(a_g)
$$

where $\sigma$ is the sigmoid function and $\tanh$ is the hyperbolic tangent, both applied elementwise.

Finally we compute the next cell state $c_t$ and next hidden state $h_t$ as

$$
c_{t} = f\odot c_{t-1} + i\odot g \hspace{4pc}
h_t = o\odot\tanh(c_t)
$$

where $\odot$ is the elementwise product of vectors.
