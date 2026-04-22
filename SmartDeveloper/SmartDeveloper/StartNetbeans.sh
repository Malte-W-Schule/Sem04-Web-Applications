#!/bin/bash

# Pfad zum JDK 21
export JAVA_HOME="/home/florian/SmartDeveloper/software/jdk-21"
export PATH="$JAVA_HOME/bin:$PATH"

# NetBeans-Installation (platform independent binary)
NETBEANS_HOME="/home/florian/SmartDeveloper/software/netbeans"

# Benutzerkonfiguration (entspricht Windows --userdir)
USERDIR="/home/florian/SmartDeveloper/software_configuration/netbeans"

# Starte NetBeans
"$NETBEANS_HOME/bin/netbeans" --userdir "$USERDIR" &
