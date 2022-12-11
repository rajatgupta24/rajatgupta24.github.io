---
title: "Getting started with kubernetes: k3s"
date: 2022-12-11
draft: false
description: "Getting started with kubernetes: K3s installation guide "
categories: [blog]
tags: [kubernetes, DevOps, 100daysofcloud]
slug: "Getting-started-with-kubernetes"
author: Rajat Gupta
cover:
    image: images/k3s-guide.png
---

This tutorial shows you how to install k3s to run Kubernetes cluster locally on our Linux machine, we will also be deploying a Docker container in our kubernetes container.

## What is Kubernetes?

For now all we need to know is that we like to deploy our application in containers, to provide a isolated enviroment for them, which is great because now you have a one container that has all the dependencies needed to run that application we can take that docker conatiner and use it on any OS without any issues.

But what happens when you have, let's say 10000 containers, for example [this is tinder](https://www.youtube.com/watch?v=o3WXPXDuCSU&t=847s), now imagine you have to manage that yourself, does not sounds, so for this we have kubernetes, Kubernetes is a container orchestration tool, that means it helps you in container management.

## How to use kubernetes?

There are cloud providers like AWS or Google Cloud that provides managed kubernetes services that you can use but if you are starting and it might not be the best choice.

For that, we will start with a local kubernetes cluster. You have lots of tools out there to help you like **minikube**, **k3s**, **kind**, etc. 
For this tutorial we will use **k3s**. If you want to read about them and there use cases [this blog from thechief](https://thechief.io/c/editorial/k3d-vs-k3s-vs-kind-vs-microk8s-vs-minikube/) might be a good read.

## Setting up K3s

*I'm using Linux (ubnutu) for this tutorial.*

Run the following command in your terminal, to install the k3s.
Additional utilities will be installed, including `kubectl`, `crictl`, `ctr`, `k3s-killall.sh`, and `k3s-uninstall.sh`.

```bash
curl -sfL https://get.k3s.io | sh -
```

*Note that this command will install latest version of kubernetes.*

To check whether the installation is completed or not, run:

```bash
k3s --version
```
Now you've k3s working but we still need to configure few parts.

```bash
sudo cp /etc/rancher/k3s/k3s.yaml ~/.kube/k3s-config
export KUBECONFIG=~/.kube/config:~/.kube/k3s-config
```

To verify that k3s has been installed successfully, and configured run:

```bash
kubectl get nodes
```

> Optional, run if you get a permission denied

```bash
sudo rm ~/.kube/k3s-config
sudo cp /etc/rancher/k3s/k3s.yaml ~/.kube/config
```

## How to use Kubernetes?
Now, create a new directory, and create a new file `deployment.yaml` and `service.yaml` and run the following commands.

> These commands will generate dry run for you and saves it in the files.

```bash
# for deployment.yaml
kubectl create deployment nginx --image=nginx --port=80 --replicas=1 --dry-run=client -o yaml > deployment.yaml

# for service.yaml
kubectl create service nodeport nginx --tcp=80:80 --dry-run=client -oyaml > service.yaml
```

Now to verify if everything is working, run these command, you will see one deployment (named nginx) and two services (kubernetes and nginx).

```bash
kubectl get deployment

kubectl get service
```

Now, In services, you will see there is a **PORT** for nginx like `80:<PORT>/TCP`.

Visit `localhost:<PORT>`, you'll find the nginx page. And finally we have deployed nginx successfully🎉 🎉 🎉.

## Things we have learned today is: 
- Docker Container Images
- Kubernetes Deployments
- Kubernetes Services
- Kubectl Dry Run

## Things to learn: 
- [How to build your own docker images?]()
- [What is NodePort in Services?]()
- [How to generate Dry-Run using Kubectl?]()

